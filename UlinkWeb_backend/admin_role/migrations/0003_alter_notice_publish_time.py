from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("admin_role", "0002_create_missing_notice_table"),
    ]

    operations = [
        migrations.AlterField(
            model_name="notice",
            name="publish_time",
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
