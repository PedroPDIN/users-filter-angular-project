import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";


const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
      return userList;
    }

    const dateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });

    const listFiltered = userList.filter(dateInterval);

    return listFiltered;
  }


  const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => {
      return user.ativo === status
    })

    return filteredList
  }

  const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }

  export const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)

    return filteredList
  }
