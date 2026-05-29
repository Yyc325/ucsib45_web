import logging
import threading
import time
from django.db import OperationalError, ProgrammingError
from django.utils import timezone
from admin_role.models import Notice

logger = logging.getLogger(__name__)


def check_publish_notices():
    """定期检查并发布到期的通知"""
    while True:
        try:
            now = timezone.now()
            # 获取所有待发布且发布时间已到的通知
            notices = Notice.objects.filter(status='待发布', publish_time__lte=now)

            # 更新这些通知的状态为已发布
            for notice in notices:
                notice.status = '已发布'
                notice.save()
        except (ProgrammingError, OperationalError) as exc:
            logger.warning("Auto publish skipped: %s", exc)

        # 每 30 秒检查一次
        time.sleep(30)


def start_publish_thread():
    """启动后台线程"""
    publish_thread = threading.Thread(target=check_publish_notices)
    publish_thread.daemon = True  # 设置为守护线程，主进程退出时自动终止。
    publish_thread.start() #启动线程
