function User({user}) {

    const {name,desingnation} = user;
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h2>{name}</h2>
        <p>{desingnation}</p>
      </div>
    </div>
  );
}

export default User;
