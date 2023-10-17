import { MenuIcon, ShoppingCartIcon } from 'lucide-react';

import { Button } from './button';
import { Card } from './card';

const Header = () => {
  return (
    <Card className="flex justify-between items-center p-[30px]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Dev</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
