import React, { ReactNode } from "react";
import tableData from "../mock_data/tableinfo.json";

interface CardProps {
  children?: ReactNode;
}

interface TableCardProps {
  table?: TableCardRowItem[];
}

interface TableCardRowItem {
  strTeam: String;
  intWin: String;
  intLoss: String;
  intPoints: String;
  intRank: String;
  strBadge: String;
  strForm: String;
  intPlayed: String;
}

export const CardWrapper: React.FC<CardProps> = ({ children }) => {
  {
    /* White card that stores content inside*/
  }
  return (
    <div className="bg-white rounded-md p-12 flex-row">
      <div>{children}</div>
    </div>
  );
};

const LorusIpsum: React.FC = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at est
      dapibus leo sagittis congue. Etiam id risus sapien. Quisque eget convallis
      nulla. Sed massa lacus, aliquam a justo vitae, elementum feugiat enim.
      Etiam congue fermentum imperdiet. Sed nec urna nec tellus facilisis
      bibendum at rhoncus nisl. In vitae fringilla magna. Quisque varius nunc
      interdum dignissim porttitor. Duis tempus risus eu ex ultricies, ac
      aliquam massa malesuada. Aliquam dapibus, lectus scelerisque finibus
      sollicitudin, turpis ligula vulputate odio, sed dignissim nisl neque quis
      eros. Ut finibus vitae leo quis posuere. Suspendisse sed facilisis risus.
      Curabitur et lacinia diam. Integer viverra enim sed pretium dapibus.
      Suspendisse magna ligula, dictum ornare bibendum sit amet, scelerisque
      quis diam. Morbi eleifend magna eu erat pellentesque pulvinar. Integer
      sollicitudin efficitur interdum. Nullam nec purus id magna pulvinar
      efficitur. Nulla pulvinar, nulla sit amet posuere consequat, arcu arcu
      consectetur neque, in pellentesque elit felis id ipsum. Maecenas ac mattis
      enim. Praesent blandit accumsan nulla, et fringilla lectus blandit at.
      Mauris varius ante sed risus viverra suscipit. Proin ullamcorper velit id
      enim aliquet, sit amet tempor nisl viverra. Sed nulla justo, interdum nec
      leo eu, ullamcorper eleifend ante.
    </div>
  );
};

export const TableCard: React.FC<TableCardProps> = ({ table }) => {
  return (
    <div className="grid grid-cols-8 gap-2 p-4">
      <div className="col-span-3 p-2">Club</div>
      <div className="col-span-1 p-2">MP</div>
      <div className="col-span-1 p-2">W</div>
      <div className="col-span-1 p-2">L</div>
      <div className="col-span-1 p-2">Form</div>
      <div className="col-span-1 p-2">Points</div>

      {table?.map((row, index) => (
        <React.Fragment key={index}>
          <div className="col-span-3 p-2">{row.strTeam}</div>
          <div className="col-span-1 p-2 ">{row.intPlayed}</div>
          <div className="col-span-1 p-2 ">{row.intWin}</div>
          <div className="col-span-1 p-2 ">{row.intLoss}</div>
          <div className="col-span-1 p-2">{row.strForm.length !== 0 ? row.strForm : "N/A"}</div>
          <div className="col-span-1 p-2 ">{row.intPoints}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

//const TableCardRow: React.FC<TableCardRowProps> = {};

export const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-20">
      <CardWrapper>
        <TableCard table={tableData.table} />
      </CardWrapper>
      <div className="grid grid-cols-2 gap-6">
        <CardWrapper>
          <LorusIpsum />
        </CardWrapper>
        <CardWrapper />
      </div>
      <CardWrapper />
    </div>
  );
};
