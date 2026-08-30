const SiteFooter = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Kavya Pabba. Built with passion for data.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
