using Assignment.UserPreference.DataAccess.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment.UserPreference.DataAccess.GenericRepository
{
    public class DbRepository<T> : IDbRepository<T> where T : class, IDataAccessEntity
    {
        private DbContext context;

        public DbRepository(AssignmentContext assignmentContext)
        {
            context = assignmentContext;
        }

        public void Create(T record)
        {
            context.Add(record);
        }

        public void Delete(int id)
        {
            var record = Get(id);

            if (record != null)
            {
                context.Remove(record);
            }
        }

        public IQueryable<T> Get()
        {
            return context.Set<T>().AsQueryable<T>();
        }

        public T Get(int id)
        {
            return Get().SingleOrDefault(e => e.Id == id);
        }

        public async Task<T> GetAsync(int id)
        {
            return await Get().SingleOrDefaultAsync(e => e.Id == id);
        }
        public int Save()
        {
            return context.SaveChanges();
        }

        public Task<int> SaveAsync()
        {
            return context.SaveChangesAsync();
        }

        public void Update(T record)
        {
            context.Set<T>().Attach(record);
            context.Entry(record).State = EntityState.Modified;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (context != null)
                {
                    context.Dispose();
                    context = null;
                }
            }
        }
    }
}
