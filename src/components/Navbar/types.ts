export interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: any;
  openModal: (login: boolean) => void;
  handleLogout: () => Promise<void>;
}

export interface NavLinksProps {
  currentUser: any;
  backgroundColor: string;
  hoverColor: string;
}

export interface AuthControlsProps {
  currentUser: any;
  openModal: (login: boolean) => void;
  handleLogout: () => Promise<void>;
  backgroundColor: string;
}
