'use client';

import { FC, useState, useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import AuthSocialButton from './AuthSocialButton';
import { Github } from 'lucide-react';
import { IconBrandGoogle } from '@tabler/icons-react';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Props {}

type Variant = 'LOGIN' | 'REGISTER';
const AuthForm: FC<Props> = ({}) => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.replace('/users');
    }
  }, [session?.status, router]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      axios
        .post('/api/register', data)
        .then((response) => {
          signIn('credentials', data);
          if (response.status === 200) {
            notifications.show({
              title: 'Registration was successful',
              message: 'Welcome you have been registered',
              autoClose: 5000,
              color: 'white',
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.green,
                  borderColor: theme.colors.green,
                  height: 100,
                },

                title: { color: theme.white },
                description: { color: theme.white },
                closeButton: {
                  color: theme.white,
                  '&:hover': { backgroundColor: theme.black },
                },
              }),
            });
            router.replace('/users');
          }
        })
        .catch(() =>
          notifications.show({
            title: 'An error occurred',
            message: 'Something went wrong please try again later',
            autoClose: 5000,
            color: 'white',
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.red,
                borderColor: theme.colors.red,
                height: 100,
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.black },
              },
            }),
          })
        )
        .finally(() => setIsLoading(false));
    }
    if (variant === 'LOGIN') {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then((response) => {
          if (response?.error) {
            notifications.show({
              title: 'An error occurred',
              message: 'Invalid credentials',
              autoClose: 5000,
              color: 'gray',
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.red,
                  borderColor: theme.colors.red,
                  height: 100,
                },

                title: { color: theme.white, fontWeight: 'bold' },
                description: {
                  color: theme.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                },
                closeButton: {
                  color: theme.white,
                  '&:hover': { backgroundColor: theme.black },
                },
              }),
            });
          }
          if (response?.ok && !response?.error) {
            notifications.show({
              title: 'Welcome back',
              message: 'Successfully logged in',
              autoClose: 5000,
              color: 'lime',
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colors.green,
                  borderColor: theme.colors.green,
                  height: 100,
                },

                title: { color: theme.white, fontWeight: 'bold' },
                description: {
                  color: theme.white,
                  fontSize: 20,
                  fontWeight: 'bold',
                },
                closeButton: {
                  color: theme.white,
                  '&:hover': {
                    backgroundColor: 'lime',
                  },
                },
              }),
            });
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((response) => {
        if (response?.error) {
          notifications.show({
            title: 'An error occurred',
            message: 'Invalid credentials',
            autoClose: 5000,
            color: 'gray',
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.red,
                borderColor: theme.colors.red,
                height: 100,
              },

              title: { color: theme.white, fontWeight: 'bold' },
              description: {
                color: theme.white,
                fontSize: 20,
                fontWeight: 'bold',
              },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.black },
              },
            }),
          });
        }
        if (response?.ok && !response?.error) {
          notifications.show({
            title: 'Welcome back',
            message: 'Successfully logged in',
            autoClose: 5000,
            color: 'lime',
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.green,
                borderColor: theme.colors.green,
                height: 100,
              },

              title: { color: theme.white, fontWeight: 'bold' },
              description: {
                color: theme.white,
                fontSize: 20,
                fontWeight: 'bold',
              },
              closeButton: {
                color: theme.white,
                '&:hover': {
                  backgroundColor: 'lime',
                },
              },
            }),
          });
          router.replace('/users');
        }
      })
      .finally(() => setIsLoading(false));
  };
  if (!isMounted) {
    return null;
  }
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              disabled={isLoading}
              label="Name"
              register={register}
              id="name"
              errors={errors}
            />
          )}
          <Input
            disabled={isLoading}
            label="Email"
            register={register}
            id="email"
            errors={errors}
          />
          <Input
            label="Password"
            register={register}
            id="password"
            errors={errors}
            disabled={isLoading}
            type="password"
          />
          <Button disabled={isLoading} fulWidth type="submit">
            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex ">
            <AuthSocialButton
              icon={Github}
              onClick={() => socialAction('github')}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
