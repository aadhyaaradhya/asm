"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FiArrowUp,
  FiArrowDown,
  FiSearch,
  FiSliders,
  FiX,
} from "react-icons/fi";
import Pagination from "./Pagination";
import Modal from "./Modal";

export interface Column<T = Record<string, unknown>> {
  header: React.ReactNode;
  accessor: string;
  sortable?: boolean;
  sticky?: boolean | "left" | "right";
  headerClassName?: string;
  cellClassName?: string;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  key: string;
  label: string;
  options: FilterOption[];
}

export interface TableProps<T = Record<string, unknown>> {
  title?: string;
  columns: Column<T>[];
  data: T[];
  onRowClick?: ((row: T) => void) | null;
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
  searchable?: boolean;
  sortable?: boolean;
  loading?: boolean;
  onSearch?: ((query: string) => void) | null;
  searchQuery?: string;
  filters?: FilterConfig[];
  filterValues?: Record<string, string>;
  onFilterChange?: ((key: string, value: string) => void) | null;
  showPagination?: boolean;
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  stickyFirstColumn?: boolean;
  showSrNo?: boolean;
  srNoHeader?: string;
}

export function Table<T extends Record<string, unknown>>({
  title = "",
  columns = [],
  data = [],
  onRowClick = null,
  className = "",
  striped = true,
  hoverable = true,
  searchable = true,
  sortable = true,
  loading = false,
  onSearch = null,
  searchQuery: externalSearchQuery = "",
  filters = [],
  filterValues = {},
  onFilterChange = null,
  showPagination = false,
  pageSizeOptions = [5, 10, 25, 50, 100],
  defaultPageSize = 10,
  stickyFirstColumn = false,
  showSrNo = true,
  srNoHeader = "Sr. No.",
}: TableProps<T>) {
  const [searchQuery, setSearchQuery] = useState(externalSearchQuery);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc" | null;
  }>({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(1);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setCurrentPage(1);
    if (onFilterChange) {
      onFilterChange(key, value);
    }
  };

  const handleSort = (columnAccessor: string) => {
    if (!sortable) return;

    let direction: "asc" | "desc" | null = "asc";
    if (sortConfig.key === columnAccessor && sortConfig.direction === "asc") {
      direction = "desc";
    } else if (sortConfig.key === columnAccessor && sortConfig.direction === "desc") {
      direction = null;
    }

    setSortConfig({ key: columnAccessor, direction });
  };

  const activeFilterCount = filters.filter(
    (f) => filterValues[f.key] && filterValues[f.key] !== "all"
  ).length;

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchExpanded(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
    if (onSearch) {
      onSearch("");
    }
    setIsSearchExpanded(false);
  };

  const filteredData =
    !onSearch && searchable && searchQuery
      ? data.filter((row) =>
          columns.some((column) => {
            const value = row[column.accessor];
            return value?.toString().toLowerCase().includes(searchQuery.toLowerCase());
          })
        )
      : data;

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.direction || !sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    const aString = aValue.toString().toLowerCase();
    const bString = bValue.toString().toLowerCase();

    if (sortConfig.direction === "asc") {
      return aString.localeCompare(bString);
    } else {
      return bString.localeCompare(aString);
    }
  });

  const paginatedData = showPagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  return (
    <div className={`overflow-hidden border border-gray-200 shadow-sm min-w-0 bg-white text-gray-900 ${className}`}>
      {(title || searchable || filters.length > 0) && (
        <>
          {/* DESKTOP TOOLBAR */}
          <div className="hidden sm:flex sm:justify-between sm:items-center sm:gap-4 px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex-shrink-0">
              {title && (
                <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                  {title}
                </h3>
              )}
            </div>

            <div className="flex items-center gap-4">
              {filters.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto">
                  {filters.map((filter) => (
                    <div key={filter.key} className="relative group flex-shrink-0">
                      <select
                        value={filterValues[filter.key] || "all"}
                        onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                        className="h-10 appearance-none pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#1e517b]/20 focus:border-[#1e517b] transition-all cursor-pointer hover:bg-gray-100 hover:border-gray-300"
                      >
                        <option value="all">All {filter.label}</option>
                        {filter.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400 group-hover:text-[#1e517b] transition-colors">
                        <FiArrowDown className="h-4 w-4" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {searchable && (
                <div className="relative w-72">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="h-10 w-full pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e517b]/20 focus:border-[#1e517b] transition-all duration-200"
                  />
                </div>
              )}
            </div>
          </div>

          {/* MOBILE TOOLBAR */}
          <div className="flex sm:hidden items-center justify-between gap-2 px-4 py-3 bg-white border-b border-gray-200">
            <div className="flex-1 min-w-0 mr-2">
              {title && (
                <h3 className="text-base font-bold text-gray-800 truncate">
                  {title}
                </h3>
              )}
            </div>

            <div className="flex items-center gap-2">
              {filters.length > 0 && (
                <button
                  type="button"
                  onClick={() => setIsFilterModalOpen(true)}
                  className="relative p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-[#1e517b] transition-all flex-shrink-0"
                  title="Filters"
                >
                  <FiSliders className="h-4 w-4" />
                  {activeFilterCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center h-4 w-4 bg-[#1e517b] text-white text-[10px] font-bold rounded-full">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              )}

              {searchable && (
                isSearchExpanded ? (
                  <div className="flex items-center gap-2 w-full max-w-[200px] animate-in slide-in-from-right-2 duration-200">
                    <div className="relative flex-1 min-w-0">
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onBlur={handleSearchBlur}
                        className="h-9 w-full pl-9 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e517b]/20 focus:border-[#1e517b] transition-all"
                      />
                    </div>
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={handleClearSearch}
                        className="flex-shrink-0 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <FiX className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsSearchExpanded(true)}
                    className={`relative p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-[#1e517b] transition-all flex-shrink-0 ${
                      searchQuery ? "border-[#1e517b] text-[#1e517b] bg-[#1e517b]/5" : ""
                    }`}
                    title="Search"
                  >
                    <FiSearch className="h-4 w-4" />
                    {searchQuery && (
                      <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center h-2.5 w-2.5 bg-[#1e517b] rounded-full" />
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          {/* FILTER MODAL (Mobile) */}
          <Modal
            isOpen={isFilterModalOpen}
            onClose={() => setIsFilterModalOpen(false)}
            title="Filters"
            size="sm"
            footer={
              <button
                type="button"
                onClick={() => setIsFilterModalOpen(false)}
                className="w-full px-4 py-2.5 bg-[#1e517b] text-white rounded-lg hover:bg-[#163e5e] transition-colors font-medium text-sm"
              >
                Apply Filters
              </button>
            }
          >
            <div className="space-y-4">
              {filters.map((filter) => (
                <div key={filter.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {filter.label}
                  </label>
                  <div className="relative group">
                    <select
                      value={filterValues[filter.key] || "all"}
                      onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                      className="w-full h-11 appearance-none pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#1e517b]/20 focus:border-[#1e517b] transition-all cursor-pointer"
                    >
                      <option value="all">All {filter.label}</option>
                      {filter.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                      <FiArrowDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        </>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              {showSrNo && (
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 w-16"
                >
                  {srNoHeader}
                </th>
              )}
              {columns.map((column, index) => {
                const isStickyLeft =
                  column.sticky === true ||
                  column.sticky === "left" ||
                  (stickyFirstColumn && index === 0);
                const isStickyRight = column.sticky === "right";
                const stickyClass = isStickyLeft
                  ? "sm:sticky left-0 bg-gray-100 z-30 sm:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]"
                  : isStickyRight
                  ? "sm:sticky right-0 bg-gray-100 z-30 sm:shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]"
                  : "";
                const canSort = sortable && column.accessor && column.sortable !== false;
                return (
                  <th
                    key={index}
                    scope="col"
                    className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 ${
                      canSort ? "cursor-pointer select-none hover:bg-gray-200/50 transition-colors" : ""
                    } ${column.headerClassName || ""} ${stickyClass}`}
                    onClick={() => canSort && handleSort(column.accessor)}
                  >
                    <div className="flex items-center gap-2">
                      <span>{column.header}</span>
                      {canSort && (
                        <div className="flex flex-col">
                          {sortConfig.key === column.accessor && sortConfig.direction ? (
                            sortConfig.direction === "asc" ? (
                              <FiArrowUp className="h-4 w-4 text-[#1e517b]" />
                            ) : (
                              <FiArrowDown className="h-4 w-4 text-[#1e517b]" />
                            )
                          ) : (
                            <div className="flex flex-col -space-y-1">
                              <FiArrowUp className="h-3 w-3 text-gray-400" />
                              <FiArrowDown className="h-3 w-3 text-gray-400" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + (showSrNo ? 1 : 0)}
                  className="px-6 py-12 text-center text-gray-500 text-sm"
                >
                  <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full border-4 border-gray-100 border-t-[#1e517b] animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#1e517b] animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="font-semibold text-gray-700 text-base">Loading data...</p>
                      <p className="text-gray-400 text-xs">Please wait while we fetch the latest information</p>
                    </div>
                  </div>
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (showSrNo ? 1 : 0)}
                  className="px-6 py-12 text-center text-gray-500 text-sm"
                >
                  <div className="flex flex-col items-center gap-2">
                    <FiSearch className="h-12 w-12 text-gray-300" />
                    <p className="font-medium">{searchQuery ? "No results found" : "No data available"}</p>
                    {searchQuery && (
                      <p className="text-xs text-gray-400">Try adjusting your search terms</p>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.filter((row) => row).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`
                    group
                    ${striped && rowIndex % 2 === 0 ? "bg-gray-50/50" : "bg-white"}
                    ${hoverable ? "hover:bg-[#1e517b]/5 transition-colors duration-150" : ""}
                    ${onRowClick ? "cursor-pointer" : ""}
                  `}
                  onClick={() => onRowClick && onRowClick(row)}
                >
                  {showSrNo && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                      {(currentPage - 1) * pageSize + rowIndex + 1}
                    </td>
                  )}
                  {columns.map((column, colIndex) => {
                    const isStickyLeft =
                      column.sticky === true ||
                      column.sticky === "left" ||
                      (stickyFirstColumn && colIndex === 0);
                    const isStickyRight = column.sticky === "right";
                    const isSticky = isStickyLeft || isStickyRight;
                    const stickyClass = isStickyLeft
                      ? "sm:sticky left-0 z-10 sm:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-[#f3f7fa] transition-colors"
                      : isStickyRight
                      ? "sm:sticky right-0 z-10 sm:shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-[#f3f7fa] transition-colors"
                      : "";
                    const bgClass = isSticky
                      ? striped && rowIndex % 2 === 0
                        ? "sm:bg-gray-50 bg-inherit"
                        : "sm:bg-white bg-inherit"
                      : "";
                    return (
                      <td
                        key={colIndex}
                        className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${column.cellClassName || ""} ${stickyClass} ${bgClass}`}
                      >
                        {column.render
                          ? column.render(row[column.accessor], row, (currentPage - 1) * pageSize + rowIndex)
                          : (row[column.accessor] as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sortedData.length / pageSize)}
          onPageChange={setCurrentPage}
          pageSize={pageSize}
          totalItems={sortedData.length}
          pageSizeOptions={pageSizeOptions}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      )}
    </div>
  );
}

export default Table;
