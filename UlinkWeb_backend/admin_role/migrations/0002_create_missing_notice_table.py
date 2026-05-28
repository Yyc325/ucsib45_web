from django.db import migrations


CREATE_NOTICE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS `admin_notice_copy1` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `subtitle` varchar(255) NOT NULL,
    `content` longtext NOT NULL,
    `publisher` varchar(255) NOT NULL,
    `status` varchar(255) NOT NULL,
    `publish_time` datetime(6) NOT NULL,
    `create_time` datetime(6) NOT NULL,
    `cover` varchar(255) NULL,
    `position_index` varchar(255) NOT NULL,
    `publish_location` varchar(255) NOT NULL,
    `user_id` integer NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `admin_notice_copy1_user_id_fk`
        FOREIGN KEY (`user_id`) REFERENCES `admin_role_admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
"""


DROP_NOTICE_TABLE_SQL = """
DROP TABLE IF EXISTS `admin_notice_copy1`;
"""


class Migration(migrations.Migration):

    dependencies = [
        ("admin_role", "0001_initial"),
    ]

    operations = [
        migrations.RunSQL(
            sql=CREATE_NOTICE_TABLE_SQL,
            reverse_sql=DROP_NOTICE_TABLE_SQL,
        ),
    ]
