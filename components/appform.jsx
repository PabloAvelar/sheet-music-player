import registerService from "../services/registerService";

function AppForm({ children }) {

    return (
        <form className='flex flex-col p-4 gap-y-4'>
            {children}
        </form>
    )
}

export default AppForm
