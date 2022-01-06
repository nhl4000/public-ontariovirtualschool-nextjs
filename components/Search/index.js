import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Autocomplete } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Router from "next/router";

const Search = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [courses, setCourses] = useState([]);
  const useStyles = makeStyles(() =>
    createStyles({
      "@global": {
        '.search.MuiAutocomplete-option[data-focus="true"]': {
          background: "#aa0304",
        },
        ".search.MuiAutocomplete-root .MuiFormControl-root": {
          width: "unset",
        },
        ".search.MuiAutocomplete-root .MuiInputBase-root": {
          borderRadius: "25px",
          marginRight: "5px",
        },
        ".search.MuiAutocomplete-inputRoot .search.MuiAutocomplete-input.MuiAutocomplete-input.MuiAutocomplete-input": {
          width: "unset",
        },
        ".search.MuiButtonBase-root": {
          borderRadius: "25px",
          padding: "5px",
        },
        ".search.MuiButtonBase-inputRoot": {
          padding: "50px",
        },
      },
    })
  );

  const classes = useStyles();

  useEffect(() => {
    let isMounted = true;
    async function fetchCourses() {
      fetch("/api/courses")
        .then(function (r) {
          return r.json();
        })
        .then(function (r) {
          let c = [];
          let res = [];
          for (let k of Object.keys(r)) {
            if (!c.includes(r[k].course_code)) {
              c.push(r[k].course_code);
              res.push(r[k]);
            }
          }
          res.sort(function (a, b) {
            return a.course_code.localeCompare(b.course_code);
          });
          if (isMounted) {
            setCourses(res);
          }
        });
    }
    fetchCourses();
    return () => {
      isMounted = false;
    };
  }, []);

  const searchHandler = function () {
    if (searchTerm.length >= 5) {
      Router.push("https://www.ontariovirtualschool.ca/courses/" + searchTerm.toLowerCase() + "/");
    }
  };

  return (
    <Box display="flex" gap={2} {...props} className={styles.searchComponent + " search"}>
      <Autocomplete
        freeSolo
        disableClearable
        filterOptions={(options, state) => {
          let searchTerm = state.inputValue.toLowerCase();
          let results = [];

          for (let option of options) {
            if (option.course_code.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
              results.push([option, option.course_code.toLowerCase().indexOf(searchTerm)]);
            }
          }

          for (let option of options) {
            if (option.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
              results.push([option, option.title.toLowerCase().indexOf(searchTerm)]);
            }
          }

          for (let option of options) {
            if (option.category.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
              results.push([option, option.category.toLowerCase().indexOf(searchTerm)]);
            }
          }

          results.filter(function (result) {
            return result[1] !== -1;
          });

          return [
            ...new Set(
              results.map(function (result) {
                return result[0];
              })
            ),
          ];
        }}
        options={courses}
        getOptionLabel={(courses) => courses.course_code}
        autoComplete
        onChange={(e, value, reason) => setSearchTerm(value.course_code)}
        renderInput={(params) => (
          <TextField
            {...params}
            // id="standard-search"
            label="Seach for courses"
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  <IconButton style={{ color: "#FFF", backgroundColor: "#aa0303" }} onClick={searchHandler}>
                    <SearchIcon />
                  </IconButton>
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />

      <Button className={styles.HeroBtn} fullWidth={!isMd}>
        REGISTER NOW
      </Button>
    </Box>
  );
};

export default Search;
