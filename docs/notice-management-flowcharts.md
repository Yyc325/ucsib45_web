# Notice Management Flowcharts

This document breaks the Notice Management module into smaller diagrams based on the current frontend repo and the backend repo `UlinkWeb_backend`.

Verified source files:

- `src/views/backstage/notice/notice.vue`
- `src/views/backstage/notice/components/addNotice/addNotice.vue`
- `src/apis/backstage/notice.ts`
- `src/views/foreground/news/news.vue`
- `src/views/foreground/home/home.vue`
- `/Users/milescai/PycharmProjects/UlinkWeb_backend/admin_role/urls.py`
- `/Users/milescai/PycharmProjects/UlinkWeb_backend/admin_role/views.py`
- `/Users/milescai/PycharmProjects/UlinkWeb_backend/admin_role/service.py`
- `/Users/milescai/PycharmProjects/UlinkWeb_backend/admin_role/models.py`
- `/Users/milescai/PycharmProjects/UlinkWeb_backend/admin_role/autoNotify.py`

Important scope note:

- The frontend and backend notice flows are both verified now.
- The only thing not fully represented here is database data itself and runtime deployment behavior.

## Quick Legend

- `待发布`: created but not yet visible on the frontend
- `已发布`: visible on the frontend
- `已撤回`: previously published, then removed from frontend display
- `About`: homepage About section cards
- `News`: news page list/cards

## Best Subset If You Want Fewer Images

If your Google Doc should stay very clear, use these 8 figures first:

1. Overall module structure
2. Admin list and select notices
3. Add notice: frontend form
4. Add notice: backend creation
5. Edit notice: backend status rules
6. Publish notice
7. Frontend News page rendering
8. Frontend About page slot rendering

## Recommended Order For Your Google Doc

1. Overall module structure
2. Admin list and select notices
3. Add notice: frontend form
4. Add notice: backend creation
5. Edit notice: frontend submit
6. Edit notice: backend status rules
7. Publish notice
8. Revoke notice
9. Delete notice
10. Backend auto-publish flow
11. Frontend News page rendering
12. Frontend About page slot rendering

## 1. Overall Module Structure

```mermaid
flowchart TD
    A[Admin opens Notice page] --> B[Load notice table]
    B --> C{Admin action}

    C --> D[Add notice]
    C --> E[Edit selected notice]
    C --> F[Publish selected notice]
    C --> G[Revoke selected notice]
    C --> H[Delete selected notice]

    D --> I[POST /api/admin_role/notices/add]
    E --> J[POST /api/admin_role/notices/update]
    F --> K[POST /api/admin_role/notices/publish]
    G --> L[POST /api/admin_role/notices/withdraw]
    H --> M[POST /api/admin_role/notices/delete]

    I --> N[Refresh notice table]
    J --> N
    K --> N
    L --> N
    M --> N

    O[Backend auto thread] --> O1[Publish due pending notices]

    P[Frontend News page] --> Q[POST /api/admin_role/notices/published_by_location with News]
    R[Frontend Home/About section] --> S[POST /api/admin_role/notices/published_by_location with About]
```

## 2. Admin List And Select Notices

```mermaid
flowchart TD
    A[Notice page mounted] --> B[loadData]
    B --> C[queryNotice with empty phone and publisher]
    C --> D{Response status}
    D -->|success| E[Store res.data in tableData]
    D -->|fail| F[Set tableData empty]
    E --> G[Render table]
    F --> G
    G --> H[Admin selects rows]
    H --> I[selectedArr updated]
    G --> J[Click title cell]
    J --> K[Open edit drawer directly]
```

Key meaning:

- This page currently loads all notices directly.
- The search button exists in UI structure, but actual filter inputs are not implemented in this file.
- Clicking a title opens edit mode immediately.
- The frontend uses `queryNotice`, which maps to backend `query_notice`, not backend `notice_list`.
- `query_notice` requires a valid admin token and supports filtering by `publisher` and `phone`.

## 3. Add Notice: Frontend Form

```mermaid
flowchart TD
    A[Click Add] --> B[Open drawer in add mode]
    B --> C[Fill notice fields]
    C --> D{Location is About?}
    D -->|yes| E[Choose position_index]
    D -->|no| F[Skip]
    E --> G[Click Save and Create or Submit]
    F --> G
    G --> H[Validate required fields]
    H --> I{Valid?}
    I -->|no| X[Show warning and stop]
    I -->|yes| J[Call createNotice API]
    J --> K{Success?}
    K -->|yes| L[Reset form or close drawer]
    L --> M[Reload table]
```

Field rules that are clearly visible in code:

- Cover image is required.
- Title is required.
- Subtitle is required.
- Publish location is required.
- `position_index` is required only when `publish_location === "About"`.
- Backend default status is `待发布`.
- Backend accepts only `About` or `News` as `publish_location`.
- Backend does not enforce `position_index` for `About`; that rule currently exists only in the frontend.
- Cover upload happens before submit and stores the returned URL in `cover_url`.

## 4. Add Notice: Backend Creation

```mermaid
flowchart TD
    A[Receive POST add] --> B[Verify JWT]
    B --> C{Admin?}
    C -->|no| X[Return error]
    C -->|yes| D[Use current admin real_name as publisher]
    D --> E[Set default status = pending]
    E --> F{publish_time provided?}
    F -->|yes| G[Validate datetime format]
    F -->|no| H[Keep publish_time null]
    G --> I{publish_location valid?}
    H --> I
    I -->|no| Y[Return error]
    I -->|yes| J[Create notice record]
    J --> K[Return success]
```

## 5. Edit Notice: Frontend Submit

```mermaid
flowchart TD
    A[Select one row or click title] --> B[Open drawer in edit mode]
    B --> C[Copy row data into noticeForm]
    C --> D[Load existing content into ArticleEditor]
    D --> E[Admin changes fields]
    E --> F{cover_url exists?}
    F -->|no| X[Show warning]
    F -->|yes| G[Validate form]
    G --> H{Form valid?}
    H -->|no| Y[Stop]
    H -->|yes| I[Call updateNotice API]
    I --> J{Success?}
    J -->|yes| K[Show success]
    K --> L[Close drawer]
    L --> M[Reset form]
    M --> N[Reload table]
```

Important current-code note:

- The backend really does have status-based edit restrictions.
- If a notice is already `已发布`, backend keeps the original `publish_time` and `publish_location`.
- If a notice is `待发布` or `已撤回`, backend allows changing `publish_time` and `publish_location`.
- The edit flow still does not separately validate `About` position index before update.

## 6. Edit Notice: Backend Status Rules

```mermaid
flowchart TD
    A[Receive POST update] --> B[Verify JWT and admin]
    B --> C[Load notice by id]
    C --> D{Current status}
    D -->|Pending or Revoked| E[Can update publish_time and publish_location]
    D -->|Published| F[Keep old publish_time and publish_location]
    E --> G[Validate status and datetime]
    F --> G
    G --> H[Save fields]
    H --> I[Return success]
```

## 7. Publish Notice

```mermaid
flowchart TD
    A[Select rows] --> B{Any selected?}
    B -->|no| X[Show warning]
    B -->|yes| C[Show confirm dialog]
    C --> D[Send ids to publish API]
    D --> E[Backend verifies admin]
    E --> F[Keep only pending or revoked notices]
    F --> G[Set publisher = current admin]
    G --> H[Set publish_time = current time]
    H --> I[Set status = published]
    I --> J[Save and return success]
    J --> K[Reload table]
```

Important current-code note:

- `publishNotice` checks for empty selection.
- `revokeNotice` currently does not check for empty selection before opening the confirm dialog.
- The `displayPosition` dialog component exists in the repo, but it is not used by `publishNotice`.
- Backend `publish_notice` only publishes notices currently in `待发布` or `已撤回`.
- Manual publish ignores any scheduled `publish_time` and replaces it with the current backend time.

## 8. Revoke Notice

```mermaid
flowchart TD
    A[Select rows] --> B[Show confirm dialog]
    B --> C[Send ids to withdraw API]
    C --> D[Backend verifies admin]
    D --> E[Keep only published notices]
    E --> F[Set status = revoked]
    F --> G[Save and return success]
    G --> H[Reload table]
```

## 9. Delete Notice

```mermaid
flowchart TD
    A[Select rows] --> B{Any selected?}
    B -->|no| X[Show warning]
    B -->|yes| C[Show confirm dialog]
    C --> D[Send ids to delete API]
    D --> E[Backend verifies admin]
    E --> F[Delete matching ids]
    F --> G[Return success]
    G --> H[Reload table]
```

## 10. Backend Auto-Publish Flow

```mermaid
flowchart TD
    A[Django app starts in runserver main process] --> B[Start background publish thread]
    B --> C[Loop every 30 seconds]
    C --> D[Find notices with status pending and publish_time <= now]
    D --> E{Any due notices?}
    E -->|no| C
    E -->|yes| F[Set status to published]
    F --> G[Save each notice]
    G --> C
```

Important backend note:

- This is separate from manual publish.
- Auto-publish changes status to `已发布`.
- Auto-publish does not overwrite `publisher`, `user_id`, or `publish_time` the way manual publish does.

## 11. Frontend News Page Rendering

```mermaid
flowchart TD
    A[Open News page] --> B[queryPublishedArticle]
    B --> C[POST /api/admin_role/notices/published_by_location with News]
    C --> D[Backend returns published notices only]
    D --> E[Backend sorts by publish_time desc create_time desc id desc]
    E --> F{Response success and has data?}
    F -->|yes| G[Map each notice into newsImage]
    F -->|no| H[Load fallback demo cards]
    G --> I[Render left carousel area]
    H --> I
    G --> J[Render right list area]
    H --> J
    I --> K[Click card]
    J --> K
    K --> L[setCurrentArticle]
    L --> M{content exists?}
    M -->|yes| N[Route to Article page]
    M -->|no| O[Stay on page]
```

Important current-code note:

- Backend already returns News notices in descending order.
- The left and right columns both loop over the same `newsImage` array.
- The code does not currently split notices into two different groups.
- The code also does not currently sort one side descending and the other side ascending.

## 12. Frontend About Page Slot Rendering

```mermaid
flowchart TD
    A[Open Home page] --> B[queryPublishedArticle]
    B --> C[POST /api/admin_role/notices/published_by_location with About]
    C --> D[Backend returns published notices only sorted descending]
    D --> E{Response success and has data?}
    E -->|yes| F[handleRepeatPositionNotice]
    E -->|no| G[Create empty 3-slot array]
    F --> H[Group by position_index]
    H --> I[If same position repeats keep newest create_time]
    I --> J[Return unique slot notices]
    J --> K[Render About cards]
    G --> K
    K --> L[Click card]
    L --> M[setCurrentArticle]
    M --> N{content exists?}
    N -->|yes| O[Route to Article page]
    N -->|no| P[Stay on page]
```

This one is useful because it explains why `position_index` exists only for `About`.

## Current Code Findings You May Want To Mention In The Doc

1. Add, query, update, delete, publish, and revoke all have backend logic verified in `UlinkWeb_backend`.
2. The admin table currently loads all notices by calling `queryNotice` with empty `phone` and `publisher`.
3. Manual publish only works for notices in `待发布` or `已撤回`.
4. Revoke only works for notices in `已发布`.
5. Backend also supports timed auto-publish for `待发布` notices whose `publish_time` has arrived.
6. Manual publish overwrites `publish_time` with the current backend time, so scheduled time is ignored in that path.
7. The `displayPosition` component looks like an unfinished or unused publish-position dialog.
8. The News page currently renders the same fetched dataset on both left and right sides.
9. The News page does not yet implement one ascending column plus one descending column.
10. `published_by_location` is open to the frontend without auth, while admin notice operations require backend token validation.

## Suggested Section Titles For Your Google Doc

- Notice Management Module Overview
- Notice List Retrieval Flow
- Notice Creation Flow
- Notice Creation Backend Flow
- Notice Editing Flow
- Notice Editing Backend Rules
- Notice Publish Flow
- Notice Revoke Flow
- Notice Delete Flow
- Notice Auto-Publish Flow
- News Page Display Flow
- About Section Slot Allocation Flow
