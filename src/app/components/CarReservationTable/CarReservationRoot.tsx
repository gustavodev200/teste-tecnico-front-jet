interface CarReservationRootProps {
  children: React.ReactNode;
}

const CarReservationRoot = ({ children }: CarReservationRootProps) => {
  return <table className="w-full bg-white">{children}</table>;
};

export default CarReservationRoot;
