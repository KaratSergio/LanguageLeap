export interface RadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
}

export interface ModalFormProps {
  onClose: () => void;
}
