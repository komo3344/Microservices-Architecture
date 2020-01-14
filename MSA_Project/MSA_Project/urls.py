from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
    path('api-token-auth/', obtain_jwt_token),  # no use
    path('api-token-refresh/', refresh_jwt_token),
    path('api-token-verity/', verify_jwt_token),

    path('rest-auth/', include('rest_auth.urls')),  # use
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
