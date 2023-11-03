import "./GiphPager.scss";

export default GiphPager;

interface IGiphPager {
  isLoading: boolean;
  itemCount: number;
  totalItemCount: number;
}

function GiphPager(props: IGiphPager) {
  return (
    <div
      className={
        "flex flex-fill justify-between align-center pager p-3 " +
        (props.isLoading ? "pager-disabled" : "")
      }
    >
      itemCount && totalItemCount ||
      <span className="text-center">
        Displaying {props.itemCount} of {props.totalItemCount} giphs
      </span>
      !itemCount || !totalItemCount || <span>&nbsp;</span>
      <div className="flex flex-row flex-wrap justify-center mx-4">
        <span className="text-center">giphy explorer</span>
        <span className="text-center mx-2">|</span>
        <span className="text-center">
          <a href="https://react.dev/">React</a>
        </span>
        <span className="text-center mx-2">|</span>
        <span className="text-center">
          By <a href="https://github.com/aljazsim">Aljaz Simonic</a> 2023
        </span>
        <span className="text-center mx-2">|</span>
        <span className="text-center">
          Powered by <a href="https://giphy.com/">Giphy</a>
        </span>
      </div>
    </div>
  );
}
