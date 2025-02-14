from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'username', 'password', 'is_verified',
                  'is_deleted', 'created_at', 'updated_at')
        read_only_fields = ('id', 'is_verified', 'is_deleted', 'created_at', 'updated_at')

    def create(self, validated_data):
        # This is actually redundant since create_user does this automatically,
        # but it makes the hashing more explicit
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            name=validated_data['name'],
            password=validated_data['password']
        )
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'username', 'is_verified',
                  'is_deleted', 'created_at', 'updated_at')
        read_only_fields = ('id', 'is_verified', 'is_deleted', 'created_at', 'updated_at')