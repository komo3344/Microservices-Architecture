from django.urls import path, include
from . import views

urlpatterns = [
    path('user/', views.UserList.as_view()),
    path('todos/', views.TodoList.as_view()),
    path('todos/<int:pk>', views.TodoListDetail.as_view()),
    # path('me/', views.current_user),
    path('me/', views.CurrentUserView.as_view()),
   ]
urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),


]