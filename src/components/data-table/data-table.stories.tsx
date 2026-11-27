import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable, type Column } from './data-table';

type Row = { id: number; date: string; name: string; amount: number };

const rows: Row[] = [
  { id: 1, date: '2026-10-01', name: 'Supermarket', amount: -735 },
  { id: 2, date: '2026-10-03', name: 'Salary', amount: 334158 },
  { id: 3, date: '2026-10-05', name: 'Energy supplier', amount: -24151 },
  { id: 4, date: '2026-10-12', name: 'Bookshop', amount: -1999 },
];

const eur = (cents: number) => new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(cents / 100);

const columns: Column<Row>[] = [
  { id: 'date', header: 'Date', cell: (r) => r.date, sortValue: (r) => r.date },
  { id: 'name', header: 'Counterparty', cell: (r) => r.name, sortValue: (r) => r.name },
  { id: 'amount', header: 'Amount', cell: (r) => eur(r.amount), sortValue: (r) => r.amount, align: 'end', numeric: true },
];

const meta: Meta<typeof DataTable<Row>> = {
  title: 'Components/DataTable',
  component: DataTable<Row>,
  args: { columns, rows, rowKey: (r: Row) => r.id },
};
export default meta;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {};

export const ClickableRows: Story = {
  args: { onRowClick: (r: Row) => alert(r.name) },
};

export const WithFooter: Story = {
  args: {
    footer: (
      <tr>
        <td colSpan={2}>Total</td>
        <td style={{ textAlign: 'end' }}>{eur(rows.reduce((s, r) => s + r.amount, 0))}</td>
      </tr>
    ),
  },
};

export const Empty: Story = {
  args: { rows: [], empty: <p>No transactions yet.</p> },
};
