from django.urls import path
from . import views

urlpatterns = [
path('', views.home, name='home_list'),
    path('', views.base, name='post_list'),
    path('onas.html/', views.onas, name='onas_list'),
path('gallery.html/', views.gallery, name='gallery_list'),
path('audio.html/', views.audio, name='audio_list'),
path('video.html/', views.video, name='video_list'),
path('contacts.html/', views.contacts, name='contacts_list'),
#path('', views.home, name='home_list'),
path('repertuar.html/', views.repertuar, name='repertuar_list'),
path('manT.html/', views.manT, name='manT_list'),
path('womenT.html/', views.womenT, name='womenT_list'),
]