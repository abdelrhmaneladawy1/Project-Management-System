import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Api/Users/Users";
import SubHeader from "../../SharedModule/Components/SubHeader/SubHeader";
import UsersList from "../Components/UsersList";

export default function UsersPage() {
  const dispatch = useDispatch();
  const [onPress, setonPress] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [pageSize, setUserSize] = useState(4);
  const { usersData } = useSelector((state) => state.usersReducer);
  const totalNumberOfPages = usersData?.totalNumberOfPages;
  useEffect(() => {
    dispatch(getUsers({ onPress, filterName, filterEmail, pageSize }));
  }, [dispatch, filterEmail, filterName, onPress]);

  return (
    <>
      <SubHeader title="Users" />
      <Container>
        <UsersList
          setonPress={setonPress}
          totalNumberOfPages={totalNumberOfPages}
          usersData={usersData}
          setFilterName={setFilterName}
          setFilterEmail={setFilterEmail}
        />
      </Container>
    </>
  );
}
