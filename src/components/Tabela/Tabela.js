import React from "react";
import { useLanguage } from "../../LanguageContext";
import styles from "./Tabela.module.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import jsonData from "./result.json";

const combinedNameColumn = {
  field: "combinedName",
  headerName: "Nome Completo",
  width: 200,
};

const roundedHoursColumn = {
  field: "roundedHours",
  headerName: "Horas de voo (arredondadas)",
  width: 100,
  valueFormatter: (params) => {
    return Math.round(params.value) + " horas";
  },
};

const columns = [
  combinedNameColumn,
  {
    field: "va_user",
    headerName: "Callsign",
    width: 150,
  },
  {
    field: "rank",
    headerName: "Rank",
    width: 150,
  },
  {
    field: "location",
    headerName: "Localização",
    width: 150,
  },
  {
    field: "flights",
    headerName: "Nº de voos",
    width: 150,
  },
  roundedHoursColumn,
];

export default function Tabela() {
  const [rows, setRows] = React.useState([]);
  const { language } = useLanguage();

  // Defina as traduções com base no idioma
  const translations = {
    "en-US": {
      fullName: "Full Name",
      roundedHours: "Rounded Flight Hours",
      callsign: "Callsign",
      rank: "Rank",
      location: "Location",
      numberOfFlights: "Number of Flights",
    },
    "pt-BR": {
      fullName: "Nome Completo",
      roundedHours: "Horas de Voo Arredondadas",
      callsign: "Callsign",
      rank: "Rank",
      location: "Localização",
      numberOfFlights: "Número de Voos",
    },
  };

  // Obtenha as traduções com base no idioma atual
  const t = translations[language];

  React.useEffect(() => {
    const data = jsonData.data.map((item, index) => ({
      ...item,
      id: index + 1,
      combinedName: `${item.name} ${item.surname[0]}`,
      roundedHours: Math.round(item.hours),
    }));
    setRows(data);
  }, []);

  return (
    <div>
      <div className={styles.div}>
        <Box
          sx={{
            height: 400,
            width: "100%",
            backgroundColor: "#FFF",
            border: "2px solid #10477F",
            borderRadius: "12px",
          }}
        >
          <DataGrid
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
              borderRadius: "10px",
              cursor: "pointer",
            }}
            rows={rows}
            columns={columns.map((col) => ({
              ...col,
              headerName: t[col.field],
            }))}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection={false}
            disableRowSelectionOnClick={true}
          />
        </Box>
      </div>
    </div>
  );
}
