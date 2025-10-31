interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <p className="text-red-400 mt-4 text-center font-medium">{message}</p>
);
