import PropTypes from "prop-types";
const Sidecarde = ({ titles, credits, times, prices }) => {
  console.log(titles, credits);
  let count = 1;
  return (
    <div>
      <div className="w-[312px] p-6 bg-white rounded-lg ">
        <div className="border-b-2">
          <p className="text-lg font-bold text-blue-500 mb-4">
            Credit Hour Remaining {credits} hr
          </p>
        </div>
        <div className="border-b-2">
          <h3 className="text-xl font-bold mt-4 mb-5">Course Name</h3>
          <div className="mb-6 space-y-2 text-slate-700 text-opacity-60">
            {titles.map((item) => (
              <p key={item.id}>
                {count++}. {item.title}
              </p>
            ))}
          </div>
        </div>
        <h3 className="py-4 border-b-2 text-base text-slate-700 text-opacity-80 font-medium">
          Total Credit Hour : {times}
        </h3>
        <h3 className="mt-4 font-semibold text-base text-slate-700 text-opacity-80">
          Total Price : {prices} USD
        </h3>
      </div>
    </div>
  );
};
Sidecarde.propTypes = {
  titles: PropTypes.array,
  credits: PropTypes.number,
  times: PropTypes.number,
  prices: PropTypes.number,
};

export default Sidecarde;
