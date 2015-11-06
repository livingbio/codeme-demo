from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.shortcuts import render
import django_kss.urls

admin.autodiscover()


def demo_view(request):
    return render(request, "base.html", {"resumes": []})


urlpatterns = patterns('',
# Examples:
# url(r'^$', 'mysite.views.home', name='home'),
# url(r'^mysite/', include('mysite.foo.urls')),

    url(r'^$', demo_view),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^style_guide/', include(django_kss.urls)),
)
