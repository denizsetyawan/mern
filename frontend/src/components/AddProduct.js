const AddProduct = () => {
    return (
        <div>
            <form>
                <div className="field">
                    <label className="label">Title</label>
                    <input type="text" className="input" placeholder="Title" />
                </div>
                
                <div className="field">
                    <label className="label">Price</label>
                    <input type="text" className="input" placeholder="Price" />
                </div>
                
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct