const AddItem = ({ handleSubmit, itemInput, setItemInput }) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label className="addItemLabel">
            ENTER TASK:
            <input
              className="addItem"
              type="text"
              value={itemInput}
              onChange={(e) => {
                setItemInput(e.target.value);
              }}
            />
          </label>
          <input className="submitButton" type="submit" />
        </form>
      </div>
    );
  };
  
  export default AddItem;