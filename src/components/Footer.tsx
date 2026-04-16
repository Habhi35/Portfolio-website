const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yellapu Habhiram Naidu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
