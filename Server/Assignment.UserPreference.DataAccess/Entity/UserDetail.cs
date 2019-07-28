using Assignment.UserPreference.DataAccess.GenericRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.UserPreference.DataAccess.Entity
{
    public partial class UserDetail: IDataAccessEntity
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

        public string Color { get; set; }

        public int Id { get ; set; }
    }
}
