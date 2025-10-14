from django.db import models

# Create your models here.

from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='articles/', blank=True, null=True)
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
