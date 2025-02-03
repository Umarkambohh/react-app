import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const CategoriesSelectbox = () => {
  const categories = [
    {
      title: "Groceroy",
      img: SearchIcon,
      link: "/"
    },
    {
      title: "Bakery",
      img: SearchIcon,
      link: "/"
    },
    {
      title: "Makeup",
      img: SearchIcon,
      link: "/"
    },
    {
      title: "Bags",
      img: SearchIcon,
      link: "/"
    },
  ]

  return (
    <>
      <div className="flex gap-2 cursor-pointer">
        <SearchIcon /> <div className="capitalize">Groceroy </div> <ArrowDropDownIcon />
      </div>

      <div></div>
    </>
  )
}

export default CategoriesSelectbox