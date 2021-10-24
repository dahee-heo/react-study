import { inject, observer } from 'mobx-react';

function Members(props) {
  console.log(props)
  const { membersStore } = props;
  // const membersStore = props.membersStore;
  const { member } = membersStore;
  return (
    <div>
      <h3>Members</h3>
      <hr className="d-block" />
      <div>
        <h4>Read</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>20</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="d-block" />
      <div>
        <h4>Create</h4>
        <input
          type="text" placeholder="Name" value={member.name}
          onChange={event => {member.name = event.target.value}}
        />
        <input
          type="text" placeholder="Age" value={member.age}
          onChange={event => {member.age = event.target.value}}
        />
        <button onClick={() => membersStore.membersCreate()}>Create</button>
      </div>
    </div>
  )
}

export default inject('membersStore')(observer(Members));
