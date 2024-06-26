export interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: any;
  openModal: (login: boolean) => void;
  handleLogout: () => Promise<void>;
}
