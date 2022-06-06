import { FC, PropsWithChildren } from "react";

/**
 * Function that renders a card header
 *
 * @param {PropsWithChildren<object>} children
 */
const CardHeader: FC<PropsWithChildren<object>> = ({
  children,
}: PropsWithChildren<object>) => <div>{children}</div>;

export default CardHeader;
