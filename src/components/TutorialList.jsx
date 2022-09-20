import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({tutorials}) => {


  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col" className="text-center">
              Title
            </th>
            <th scope="col" className="text-center">
              Description
            </th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FaEdit
                    size={20}
                    className="me-2 text-warning cursor-pointer"
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
