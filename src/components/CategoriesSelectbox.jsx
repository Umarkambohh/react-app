import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const CategoriesSelectbox = () => {
  const categories = [
    {
      title: "Groceroy",
      link: "/",
      component: <AssignmentTurnedInIcon />
    },
    {
      title: "Bakery",
      link: "/",
      component: <AccessAlarmsIcon />
    },
    {
      title: "Fashion",
      link: "/",
      component: <AccessibilityNewIcon />
    },
  ];

  const handleSelect = (c) => {
    console.log(c);
  }
  return (
    <>
      <div className="flex gap-2 cursor-pointer">
        <SearchIcon /> <div className="capitalize">Groceroy </div> <ArrowDropDownIcon />
      </div>

      <div>
        {categories.map((c, index) => (
          <div className='cursor-pointer' key={index} onClick={handleSelect(c)}>
            <span>{c.component}</span>
            <span>{c.title}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoriesSelectbox