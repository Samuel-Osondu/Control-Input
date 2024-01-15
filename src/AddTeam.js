import { FaPlus } from "react-icons/fa"
const AddTeam = ({AddTeam, setAddTeam, teamAddition}) => {
  return (
        <form className="addTeam">
            <label for="addTeam">Add Team</label>
            <input type="text"
            autoFocus
                id="addTeam"
                placeholder="add team"
                required
                value={AddTeam}
                onChange={(e) => setAddTeam(e.target.value)}
            />
            <button 
                type="submit"
                aria-label="addTeam"
                ><FaPlus />
            </button>
        </form>
  )
}

export default AddTeam