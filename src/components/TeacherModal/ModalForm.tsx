import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Custom/Button';
import InputField from '../Custom/InputField';
import { FormData, ModalFormProps } from './types';

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full">
      <InputField
        placeholder="Full Name"
        register={register('name', { required: 'Name is required' })}
        error={errors.name}
      />
      <InputField
        placeholder="Email"
        type="email"
        register={register('email', { required: 'Email is required' })}
        error={errors.email}
      />
      <InputField
        placeholder="Phone number"
        register={register('phone', { required: 'Phone number is required' })}
        error={errors.phone}
      />
      <Button type="submit" className="py-4 mt-10">
        Book
      </Button>
    </form>
  );
};

export default ModalForm;
