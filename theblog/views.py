from django.shortcuts import render
from .models import Post,Onas,Gallery,Audio,Video,Contacts,Repertuar

# Create your views here.
def base(request):
    return render(request, 'base.html', {})

def onas(request):
    return render(request, 'onas.html', {})

def gallery(request):
    return render(request, 'gallery.html', {})

def audio(request):
    return render(request, 'audio.html', {})


def video(request):
    return render(request, 'video.html', {})

def contacts(request):
    return render(request, 'contacts.html', {})

def home(request):
    return render(request, 'home.html', {})

def repertuar(request):
    return render(request, 'repertuar.html', {})

def manT(request):
    return render(request, 'manT.html', {})

def womenT(request):
    return render(request, 'womenT.html', {})