using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment.UserPreference.DataAccess.GenericRepository
{
    public interface IDbRepository<T>
    {
        IQueryable<T> Get();

        T Get(int id);


        void Create(T record);

        void Update(T record);

        void Delete(int id);

        int Save();

        Task<int> SaveAsync();
    }
}
