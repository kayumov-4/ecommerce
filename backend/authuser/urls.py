from rest_framework.routers import DefaultRouter
from .views import SessionViewSet,RegisterViewSet

router = DefaultRouter()
router.register('session', SessionViewSet, basename='session')
router.register('register', RegisterViewSet, basename='register')
urlpatterns = router.urls
