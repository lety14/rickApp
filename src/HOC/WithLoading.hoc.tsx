import { ReactNode } from "react";
import Error from "../components/error/Error.component";

interface LoadingProps {
  loading: boolean;
  error: boolean;
  children: ReactNode;
}

/**
 * HOC that renders differents stages of the component when its fetching data
 *
 * @param {React.ComponentType<T>}Component
 * @param {React.ComponentType}LoadingComponentHoc
 * @param {string}message
 */
const WithLoading = <T extends object>(
  Component: React.ComponentType<T>,
  LoadingComponentHoc: React.ComponentType,
  message: string
) => {
  return (props: LoadingProps) => (
    <>
      {props.loading ? (
        <LoadingComponentHoc />
      ) : props.error ? (
        <Error message={message} />
      ) : (
        <Component {...(props as T)} />
      )}
    </>
  );
};
export default WithLoading;
