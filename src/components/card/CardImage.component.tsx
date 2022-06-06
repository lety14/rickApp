import { FC, PropsWithChildren } from "react";

/**
 * Function that renders a card image
 *
 * @param {PropsWithChildren<object>} children
 */
const CardImage: FC<PropsWithChildren<object>> = ({
  children,
}: PropsWithChildren<object>) => <div>{children}</div>;

export default CardImage;
