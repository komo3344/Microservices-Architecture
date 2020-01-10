from rest_framework import serializers
from .models import User, Todo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class CurrentUserSerializer(serializers.ModelSerializer):
    current_user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())  # 현재접속유저

    class Meta:
        model = User
        fields = ('current_user', )