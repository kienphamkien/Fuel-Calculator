# Generated by Django 4.0.3 on 2022-05-02 22:11

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_alter_fuelquotes_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientinformation',
            name='zipcode',
            field=models.CharField(default='', max_length=10, validators=[django.core.validators.MinLengthValidator(5)]),
        ),
    ]
