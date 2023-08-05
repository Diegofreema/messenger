import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon | any;
  onClick: () => void;
}

const AuthSocialButton: FC<Props> = ({ icon: Icon, onClick }): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
