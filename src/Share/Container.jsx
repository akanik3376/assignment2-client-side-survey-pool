
const Container = ({ children }) => {
    return (
        <div className="max-w-7xl border-2 border-red-400 mx-auto px-10">
            {children}
        </div>
    );
};

export default Container;