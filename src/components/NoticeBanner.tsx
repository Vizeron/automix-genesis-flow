const NoticeBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/90 text-primary-foreground py-3 text-center">
      <p className="text-sm font-medium">
        We are currently not accepting new clients.
      </p>
    </div>
  );
};

export default NoticeBanner;
