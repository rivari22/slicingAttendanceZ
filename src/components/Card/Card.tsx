import Mini from './Card.Mini';

const Card = (props: {children: React.ReactNode}) => {
  return props.children;
};

Card.Mini = Mini;

export default Card;
