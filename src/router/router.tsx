import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import IndexPage from "../layers/pages/IndexPage/IndexPage";
import CheckEvent from "../layers/pages/CheckEvent/components/page/CheckEvent";
import { CheckEventLoader } from "../layers/pages/CheckEvent/loaders/CheckEventLoader";
import ServerErrorPage from "../layers/pages/ServerErrorPage/ServerErrorPage";
import ClientErrorPage from "../layers/pages/ClientErrorPage/ClientErrorPage";
import CheckEventGallery from "../layers/pages/CheckEvent/components/gallery/CheckEventGallery";
import CheckEventGalleryLoader from "../layers/pages/CheckEvent/loaders/CheckEventGalleryLoader";
import EventsListPage from "../layers/pages/EventsList/components/page/EventsListPage";
import { eventsListLoader } from "../layers/pages/EventsList/loaders/eventsListLoader";
import AuthorizationPage from "../layers/pages/Authorization/components/AuthorizationPage";
import { loginAction } from "../layers/pages/Authorization/actions/loginAction";
import { registrationAction } from "../layers/pages/Authorization/actions/registrationAction";
import { logoutAction } from "../root/actions/logoutAction";
import CreateUpdateEvent from "../layers/pages/UpdateEvent/components/UpdateEvent";
import UpdateEvent from "../layers/pages/UpdateEvent/components/UpdateEvent";
import { updateEventLoader } from "../layers/pages/UpdateEvent/loaders/updateEventLoader";
import { updateEventAction } from "../layers/pages/UpdateEvent/actions/updateEventAction";
import { createEventAction } from "../actions/createEventAction";
import EventsListForOrganizer from "../layers/pages/EventsListForOrganizer/components/page/EventsListForOrganizer";
import { eventsListForOrganizerLoader } from "../layers/pages/EventsListForOrganizer/loaders/eventsListForOrganizerLoader";
import { buyTicketAction } from "../actions/buyTicketAction";
import { ticketsListLoader } from "../layers/pages/TicketsList/loaders/ticketsListLoader";
import TicketsListPage from "../layers/pages/TicketsList/components/page/TicketsListPage";
import ActivateTicketPage from "../layers/pages/ActivateTicket/components/page/ActivateTicketPage";
import { activateTicketLoader } from "../layers/pages/ActivateTicket/loaders/activateTicketLoader";
import { activateTicketAction } from "../layers/pages/ActivateTicket/actions/activateTicketAction";

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ClientErrorPage />,
  children: [
    {
      path: 'activateTicket/:ticketId',
      element: <ActivateTicketPage/>,
      loader: activateTicketLoader,
      action: activateTicketAction,
    },
    {
      path: 'myTickets',
      element: <TicketsListPage/>,
      loader: ticketsListLoader,
    },
    {
      path: 'buyTicket/:eventId',
      action: buyTicketAction
    },
    {
      path: 'myEvents',
      element: <EventsListForOrganizer/>,
      loader: eventsListForOrganizerLoader,
    },
    {
      path: 'createEvent',
      action: createEventAction
    },
    {
      path: 'updateEvent/:eventId',
      element: <UpdateEvent/>,
      loader: updateEventLoader,
      action: updateEventAction
    },
    {
      path: 'logout',
      action: logoutAction
    },
    {
      path: 'login',
      element: <AuthorizationPage/>,
      action: loginAction
    },
    {
      path: 'registration',
      element: <AuthorizationPage/>,
      action: registrationAction
    },
    {
      path: 'ServerErrorPage',
      element: <ServerErrorPage />
    },
    {
      path: 'event/:eventId',
      element: <CheckEvent />,
      loader: CheckEventLoader,
      children: [
        {
          path: 'gallery',
          loader: CheckEventGalleryLoader
        }
      ]
    },
    {
      index: true,
      element: <EventsListPage/>,
      loader: eventsListLoader
    }
  ]
},
])

export default router;