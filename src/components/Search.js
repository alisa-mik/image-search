import TextField from "@material-ui/core/TextField"

export function Search({ change, submit }) {
    return (
        <form
            onSubmit={submit}
            style={{ margin: '2rem' }}>
            <TextField onChange={change} fullWidth label='Search for anything' />
        </form>
    )
}

