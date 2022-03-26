# Generated by Django 4.0.3 on 2022-03-19 17:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_useraccount_address1_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FuelQuotes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gallons', models.FloatField()),
                ('delivery_address', models.CharField(max_length=100)),
                ('delivery_date', models.CharField(max_length=100)),
                ('price', models.FloatField()),
                ('amount_due', models.FloatField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]